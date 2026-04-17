FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

FROM node:20-alpine AS builder
WORKDIR /app
ARG REACT_APP_URL
ARG REACT_APP_SERVER
ARG REACT_APP_ENV
ENV REACT_APP_URL=$REACT_APP_URL
ENV REACT_APP_SERVER=$REACT_APP_SERVER
ENV REACT_APP_ENV=$REACT_APP_ENV
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=4001

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN mkdir -p /app/.next/cache/images && chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 4001

CMD ["node", "server.js"]
