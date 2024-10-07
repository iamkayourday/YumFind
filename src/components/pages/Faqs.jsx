import { Accordion, AccordionItem } from "@nextui-org/react";
import Header from "./Header";
import Footer from "./Footer";
import LogOut from "../Auth/LogOut";

const Faqs = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold text-[#1e1e1f] dark:text-white mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <Accordion className="w-full max-w-2xl">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="What is YumFind?"
            className="text-[#1e1e1f] dark:text-white"
          >
            YumFind is a platform where users can discover a wide variety of
            recipes from different cuisines. You can browse through recipes to
            find inspiration for your next meal!
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="How do I search for recipes?"
            className="text-[#1e1e1f] dark:text-white"
          >
            You can use the search bar at the top of the homepage to search for
            recipes by name. Simply enter a recipe title to find what you're
            looking for (e.g., sushi, shawarma, cake) in the search bar.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Can I submit my own recipes?"
            className="text-[#1e1e1f] dark:text-white"
          >
            At the moment, YumFind does not support recipe submissions directly
            through the platform. The recipes available come from a collection
            provided from an external API.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="How do I save recipes for later?"
            className="text-[#1e1e1f] dark:text-white"
          >
            Easily save recipes by clicking the "Bookmark" button on the recipe
            page. Access your saved recipes anytime on the Favorites page.
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;