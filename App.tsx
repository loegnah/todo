import CalenderPage from "./src/page/calenderPage";
import { getStartPage } from "./src/lib/pageManager";

export default function App() {
  return getStartPage() ? <CalenderPage /> : "";
}
