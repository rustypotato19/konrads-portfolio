import Cards from "../../components/card-1/Card";
import Header from "../../components/header/Header";
import PageContainer from "../../components/PageContainer";
import { useDisplayContext } from "../../contexts/display/DisplayContext";
import type { CardType } from "../../types/types";
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Home() {
  const { isSmallScreen } = useDisplayContext();

  const cardItems: CardType = {
    items: [
      {
        title: "GitHub",
        subtitle: "rustypotato19 @ github",
        Icon: BsGithub,
        link: "https://github.com/rustypotato19",
      },
      {
        title: "LinkedIn",
        subtitle: "Konrad Mitura @ LinkedIn",
        Icon: BsLinkedin,
        link: "https://www.linkedin.com/in/konradmitura/",
      },
      {
        title: "Email",
        subtitle: "konradmitura8@gmail.com",
        Icon: BsEnvelope,
        link: "https://konradmitura8@gmail.com",
      },
      {
        title: "Instagram",
        subtitle: "konrad_m_ @ instagram",
        Icon: BsInstagram,
        link: "https://www.instagram.com/konrad_m_/",
      },
    ],
  };

  return (
    <PageContainer>
      <Header />
      {isSmallScreen ? (
        // Small Screen
        <h1 className="text-white">Hi Small Screen User!</h1>
      ) : (
        // Desktop
        <div className="w-full h-full max-h-screen flex flex-col justify-start items-center gap-8">
          <div className="w-5/8 h-fit flex flex-col">
            <div className="flex flex-col gap-2">
              <h1 className="w-full text-(--s-h-green) text-left text-2xl font-semibold">
                who am i?
              </h1>
              <p className="text-(--t-h-green)/50 w-2/3 lowercase">
                i'm Konrad - a uk-based developer focused on building
                efficient, scalable, and meaningful software. full-stack
                development is my passion, and i enjoy working across the entire
                stack to create cohesive and well-designed systems.
              </p>
              <p className="text-(--t-h-green)/50 w-2/3 lowercase">
                i enjoy designing systems end-to-end - from infrastructure and
                data pipelines to user interfaces and deployment. i care about
                clarity, performance, and making sure that the customer is
                always satisfied.
              </p>
            </div>
          </div>

          <div className="w-5/8">
            <Cards items={cardItems.items} />
          </div>
        </div>
      )}
    </PageContainer>
  );
}
