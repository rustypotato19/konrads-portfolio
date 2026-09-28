import { motion, type Variants } from "framer-motion";
import Header from "../../components/header/Header";
import PageContainer from "../../components/PageContainer";
import { useDisplayContext } from "../../contexts/display/DisplayContext";
import type { CardType, ExploreCardType } from "../../types/types";
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import getRandom from "../../utils/getRandom";
import SocialCards from "../../components/cards/social-card/SocialCard";
import ExploreCards from "../../components/cards/explore-card/ExploreCard";
import {
  Grid2X2CheckIcon,
  InfoIcon,
  SendIcon,
  TextSelectIcon,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const introVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { isSmallScreen } = useDisplayContext();

  const cardItems: CardType = {
    items: [
      {
        title: "GitHub",
        subtitle: "rustypotato19 @ github",
        Icon: BsGithub,
        link: "https://github.com/rustypotato19",
        isMobile: isSmallScreen,
      },
      {
        title: "LinkedIn",
        subtitle: "Konrad Mitura @ LinkedIn",
        Icon: BsLinkedin,
        link: "https://www.linkedin.com/in/konradmitura/",
        isMobile: isSmallScreen,
      },
      {
        title: "Email",
        subtitle: "konradmitura8@gmail.com",
        Icon: BsEnvelope,
        link: "https://konradmitura8@gmail.com",
        isMobile: isSmallScreen,
      },
      {
        title: "Instagram",
        subtitle: "konrad_m_ @ instagram",
        Icon: BsInstagram,
        link: "https://www.instagram.com/konrad_m_/",
        isMobile: isSmallScreen,
      },
    ],
  };

  const exploreItems: ExploreCardType = {
    items: [
      {
        title: "About Me",
        link: "/about",
        isMobile: isSmallScreen,
        icon: InfoIcon,
      },
      {
        title: "My Projects",
        link: "/projects",
        isMobile: isSmallScreen,
        icon: Grid2X2CheckIcon,
      },
      {
        title: "My Experience",
        link: "/cv",
        isMobile: isSmallScreen,
        icon: TextSelectIcon,
      },
      {
        title: "Contact Me",
        link: "/contact",
        isMobile: isSmallScreen,
        icon: SendIcon,
      },
    ],
  };

  const introMessages = [
    "i'm Konrad - a uk-based developer focused on building efficient, scalable, and meaningful software. full-stack development is my passion, and i enjoy working across the entire stack to create cohesive and well-designed systems.",
    "i enjoy designing systems end-to-end - from infrastructure and data pipelines to user interfaces and deployment. i care about clarity, performance, and making sure that the customer is always satisfied.",
  ];

  return (
    <PageContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <motion.div variants={itemVariants}>
          <Header />
        </motion.div>

        {isSmallScreen ? (
          // Small Screen
          <div className="w-full h-full flex flex-col justify-start items-center gap-8">
            <motion.div
              variants={itemVariants}
              className="w-5/6 h-fit flex flex-col"
            >
              <motion.div
                variants={introVariants}
                className="flex flex-col gap-2"
              >
                <motion.h1
                  variants={itemVariants}
                  className="w-full text-(--s-h-green) text-left text-xl font-semibold"
                >
                  who am i?
                </motion.h1>

                {introMessages.map((m) => (
                  <motion.p
                    key={getRandom() * getRandom()}
                    variants={itemVariants}
                    className="text-(--t-h-green)/50 w-full lowercase text-sm"
                  >
                    {m}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full px-4">
              <SocialCards items={cardItems.items} />
            </motion.div>

            <motion.div variants={itemVariants} className="w-full px-4">
              <h1 className="w-full text-(--s-h-green) text-left text-2xl font-semibold">
                Explore this site
              </h1>
              <ExploreCards items={exploreItems.items} />
            </motion.div>
          </div>
        ) : (
          // Desktop
          <div className="w-full h-full max-h-screen flex flex-col justify-start items-center gap-12">
            <motion.div
              variants={itemVariants}
              className="w-5/8 h-fit flex flex-col"
            >
              <motion.div
                variants={introVariants}
                className="flex flex-col gap-2"
              >
                <motion.h1
                  variants={itemVariants}
                  className="w-full text-(--s-green) text-left text-2xl font-semibold"
                >
                  who am i?
                </motion.h1>

                {introMessages.map((m) => (
                  <motion.p
                    key={getRandom() * getRandom()}
                    variants={itemVariants}
                    className="text-(--t-h-green)/50 w-2/3 lowercase"
                  >
                    {m}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-5/8">
              <h1 className="w-full text-(--s-h-green) text-left text-2xl font-semibold">
                Socials
              </h1>
              <SocialCards items={cardItems.items} />
            </motion.div>

            <motion.div variants={itemVariants} className="w-5/8">
              <h1 className="w-full text-(--s-h-green) text-left text-2xl font-semibold">
                Explore this site
              </h1>
              <ExploreCards items={exploreItems.items} />
            </motion.div>
          </div>
        )}
      </motion.div>
    </PageContainer>
  );
}
