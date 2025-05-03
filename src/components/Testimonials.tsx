import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah M",
    userName: "@sarah_M",
    comment: "You Can Transform has been a game-changer! It's so easy to manage clients, schedule sessions, and track progress.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John K",
    userName: "@john_k",
    comment:
      "I love how intuitive this software is. I was up and running in minutes, and it has saved me hours of administrative work.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Jessica L",
    userName: "@jessicaL",
    comment:
      "The client management features are fantastic. I can keep all my client information organized and easily access it whenever I need it.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David R",
    userName: "@david__r",
    comment:
      "This software has helped me grow my coaching business. I'm able to reach more clients and provide a better experience for them",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maria P",
    userName: "@maria2p_p",
    comment:
      "The support team is amazing! They are always responsive and helpful whenever I have questions.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Williams",
    userName: "@emilywilliams",
    comment:
      "I highly recommend You Can Transform to any coach looking to streamline their business and improve client outcomes.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
      Hear From Our 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Coaches{" "}
        </span>
        
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      A central hub for all your coaching needs. Organize client data, develop session plans, and manage your coaching business with our powerful and feature-rich interface.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
