#!/bin/bash
set -euo pipefail

# Only run in Claude Code remote/web environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Installing headroom-ai..."
# --ignore-installed works around Debian system-installed packages (e.g. PyJWT)
# that lack a RECORD file and would otherwise block the install
pip install --quiet --ignore-installed "headroom-ai[mcp,proxy]"

echo "Registering headroom MCP server..."
headroom mcp install --force

echo "Headroom setup complete."
