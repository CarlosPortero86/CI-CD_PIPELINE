import { execSync } from 'child_process';
import { getInput, setFailed } from '@actions/core';

async function run() {
  try {
    const path = getInput('path');
    execSync(`eslint ${path}`, { stdio: 'inherit' });
  } catch (error) {
    setFailed(`Linting failed: ${error.message}`);
  }
}

run();
