import Header from "../../components/header/Header";
import PageContainer from "../../components/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <h1 className="text-white">Hi!</h1>
    </PageContainer>
  );
}
