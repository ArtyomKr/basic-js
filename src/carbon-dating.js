const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(sample) {
  console.log(sample);
  if (+sample > 0 && +sample < MODERN_ACTIVITY && typeof sample === 'string') {
    const k = 0.693 / HALF_LIFE_PERIOD;
    const t = Math.log(MODERN_ACTIVITY / sample) / k;
    return Math.ceil(t);
  }
  return false;
}
