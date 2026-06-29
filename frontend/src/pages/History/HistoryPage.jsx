import { useEffect, useMemo, useState } from "react";

import Container from "../../components/common/Container";
import SearchBar from "../../components/history/SearchBar";
import HistoryTable from "../../components/history/HistoryTable";
import HistoryEmpty from "../../components/history/HistoryEmpty";

import { getHistory } from "../../services/historyService";

function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadHistory() {
      const data = await getHistory();
      setHistory(data);
    }

    loadHistory();
  }, []);

  const filteredHistory = useMemo(() => {
    return history.filter((item) =>
      item.weaveType.toLowerCase().includes(search.toLowerCase())
    );
  }, [history, search]);

  return (
    <section className="min-h-screen bg-slate-100 py-16">
      <Container>
        <div className="mb-8">
          <h1 className="text-5xl font-black text-slate-900">
            Analysis History
          </h1>

          <p className="mt-2 text-slate-500">
            View your previous fabric analysis reports.
          </p>
        </div>

        <div className="mb-8">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        {filteredHistory.length === 0 ? (
          <HistoryEmpty />
        ) : (
          <HistoryTable history={filteredHistory} />
        )}
      </Container>
    </section>
  );
}

export default HistoryPage;