import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge Tailwind classes safely
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format number with commas
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Calculate percentage
export function calculatePercentage(current, total) {
  if (total === 0) return 0;
  return Math.min(100, Math.round((current / total) * 100));
}

// Format time (seconds to mm:ss)
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Get time until midnight (for daily reset)
export function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return Math.floor((midnight - now) / 1000);
}

// Check if same day
export function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

// Generate random ID
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Clamp number between min and max
export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

// Sleep/delay function
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}