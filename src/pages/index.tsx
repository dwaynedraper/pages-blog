import { Montserrat } from "next/font/google";
import Article from "@/components/Article";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <div className={`flex items-center `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            {" "}
            <Article
              title={`The Great A-Peel: Bananas Crush Potatoes in the Battle for Produce Supremacy`}
              body={body}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const body = `In the never-ending war between fruits and vegetables, bananas and potatoes have emerged as the fiercest of rivals. Today, we shine a light on the indisputable superiority of the mighty banana and lay to rest the futile delusions of the lackluster potato.
<br />
Bananas boast a natural, elegant curvature, while potatoes are lumpy, misshapen tubers. Aesthetically, there's no contest. Bananas not only exude a sophisticated air, but their sleek, ergonomic design allows them to fit perfectly in the human hand. It's almost as if Mother Nature herself intended for us to cradle these magnificent fruits in our palms. Potatoes, on the other hand, are clearly the result of a botched evolutionary experiment.
<br />
Furthermore, bananas come with their own convenient, biodegradable packaging. Simply peel away the protective layer to reveal the delicious fruit within – no need for plastic bags, aluminum foil, or Tupperware. Meanwhile, potatoes force us to engage in backbreaking labor just to consume them. Boil them, bake them, fry them – it's a never-ending cycle of culinary servitude. Don't be a slave to your food.
<br />
Another significant point in favor of bananas is their impressive nutritional profile. Rich in potassium, magnesium, and vitamin C, bananas offer a healthy and tasty option for those seeking an energy boost. Their high fiber content also promotes digestive health, making them the ideal snack for those suffering from constipation. Potatoes? Psh. They're just a carb-laden lump of starch, posing as a vegetable.
<br />
Moreover, bananas are undeniably the superior choice for mobile snacking. Imagine trying to nosh on a potato while jogging, cycling, or tightrope walking. It's preposterous! Bananas, however, have been the go-to snack for athletes and adventurers for centuries. In fact, Alexander the Great was known to have conquered the world with a trusty banana by his side (citation needed).
<br />
In terms of versatility, bananas also reign supreme. They can be enjoyed in smoothies, sliced atop oatmeal, or even incorporated into decadent desserts. The humble banana bread, for instance, has brought families together for generations, while the more exotic Bananas Foster has set many a romantic evening aflame. Potatoes, on the other hand, are forever relegated to the side dish category – forever playing second fiddle to the main course. Unless you're one of those weirdos who considers a potato a whole meal. Get with the times.
<br />
Bananas also excel in the realm of pop culture. Andy Warhol's iconic banana graced the cover of The Velvet Underground & Nico's album, forever cementing the fruit's status as a symbol of artistic genius. And let's not forget the classic comedic trope of the banana peel slip – it has brought laughter to countless generations. Meanwhile, the potato's only claim to fame is a brief cameo in Toy Story, as the bumbling Mr. Potato Head. Tragic.
<br />
Bananas possess an unparalleled level of international appeal. They are a staple in the diets of people across the globe, from South America to Southeast Asia. They are even at the center of an annual festival in New Orleans, the Banana Festival, which celebrates the fruit's impact on the city's history and culture. Potatoes, meanwhile, are forever associated with the devastating Irish Potato Famine – not exactly the stuff of festive celebration.
<br />
In conclusion, it's clear that bananas have triumphed over their tuberous adversaries in every possible way. Their aesthetic appeal, nutritional value, and pop culture prowess are simply unmatched. So next time you reach for a snack, bypass the lowly potato and embrace the sweet, golden goodness of the almighty banana. Your taste buds, and indeed the world, will thank you.`;
