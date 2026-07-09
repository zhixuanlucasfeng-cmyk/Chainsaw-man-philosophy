import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackEmoji: string;
  fallbackLabel: string;
}

export function ImageWithFallback({ src, alt, className, fallbackEmoji, fallbackLabel, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(!src);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[var(--off-black)] text-[var(--text)] border border-[var(--smoke)] ${className}`} {...props as any}>
        <span className="text-4xl mb-2">{fallbackEmoji}</span>
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--smoke)] opacity-60">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
