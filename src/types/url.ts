export type OriginalURL = {
  original_url: string
}

export type ShortenedURL = {
  shortened_url: string
}

export type ShortenedURLData = OriginalURL &
  ShortenedURL & {
    user_id: Number
    created_at: Date
  }
