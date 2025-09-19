import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RuminationSurvey from './RuminationSurvey';
import ResultPage from './ResultPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<RuminationSurvey />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}
