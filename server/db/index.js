const { createClient } = require("@clickhouse/client");

const host = process.env.CLICKHOUSE_HOST || "localhost";
const port = parseInt(process.env.CLICKHOUSE_PORT || "8123");
const username = process.env.CLICKHOUSE_USER || "default";
const password = process.env.CLICKHOUSE_PASSWORD || "clickhouse";

// ClickHouse Client Configuration
const clickhouseClient = createClient({
  url: `http://${host}:${port}`,
  username: username,
  password: password,
});

module.exports = clickhouseClient;
