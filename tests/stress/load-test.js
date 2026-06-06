import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 }, // Rampa a 10 usuarios concurrentes
    { duration: '1m', target: 30 },  // Mantener a 30 usuarios
    { duration: '30s', target: 0 },  // Rampa de descenso
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],    // Menos del 1% de errores en peticiones
    http_req_duration: ['p(95)<1000'], // El 95% de las llamadas debe tardar menos de 1000ms
  },
};

export default function () {
  const url = __ENV.MY_URL || 'http://localhost:5173';
  const res = http.get(url);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
