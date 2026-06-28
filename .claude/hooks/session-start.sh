#!/bin/bash
set -euo pipefail

# Only run in Claude Code remote/web environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Installing headroom-ai..."
pip install --quiet "headroom-ai[all]"

echo "Registering headroom MCP server..."
headroom mcp install

echo "Headroom setup complete."
