import { createBackend } from '@backstage/backend-defaults';
import { MockCacheClient } from './MockCacheClient';
import { MockUrlReader } from './MockedUrlReader';

const backend = createBackend();

backend.add(import('../src'));
backend.start();
