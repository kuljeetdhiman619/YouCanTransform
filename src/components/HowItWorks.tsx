import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpNarrowWide, CalendarClock, ChartNoAxesCombined, CircleCheckBig, Clock9, DatabaseBackup, DollarSign, GalleryThumbnails, Gamepad2, Radical, ShoppingCart, Store, User, UserRoundPen, Zap } from 'lucide-react';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Store size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "24/7 Access",
    description:
      "Fitness on your schedule, anytime, anywhere.",
  },
  {
    icon: <Radical size={40} style={{ color: "rgba(32,169,83,255)" }}/>,
    title: "Supportive Community",
    description:
      "Connect and share your progress with fellow fitness enthusiasts.",
  },
  {
    icon: <Zap size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Personalized Progression",
    description:
      "Programs adapt to your level for continuous progress.",
  },
  {
    icon: <Gamepad2 size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Fun and Engaging",
    description:
      "Stay motivated with interactive challenges and rewards.",
  },
  {
    icon: <UserRoundPen size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Create Your Profile",
    description:
      "Set up your professional coach profile, showcasing your expertise, services, and credentials.",
  },
  {
    icon: <GalleryThumbnails size={40} style={{ color: "rgba(32,169,83,255)" }}  />,
    title: "Build Your Portfolio",
    description:
      "Design an engaging portfolio to highlight your past successes, client testimonials, and coaching approach.",
  },
  {
    icon: <User size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Connet with Clients",
    description:
      "Clients can easily find and view your profile and portfolio on the platform.",
  },
  {
    icon: <CalendarClock size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Appointment Scheduling",
    description:
      "Manage your availability and allow clients to book sessions directly through your profile.",
  },
  {
    icon: <CircleCheckBig size={40} style={{ color: "rgba(32,169,83,255)" }}/>,
    title: "Automated Confirmations",
    description:
      "Clients receive instant booking confirmations, and you get notified, automatically.",
  },
  {
    icon: <User size={40} style={{ color: "rgba(32,169,83,255)" }}/>,
    title: "Manage Your Clients",
    description:
      "Keep track of client information, session history, and communication in one central location.",
  },
  {
    icon: <ChartNoAxesCombined size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Track Client Progress",
    description:
      "Monitor your clients' progress, achievements, and feedback to tailor your coaching.",
  },
  {
    icon: <DollarSign size={40} style={{ color: "rgba(32,169,83,255)" }}/>,
    title: "Manage Payments",
    description:
      "Process payments, track income, and manage your coaching finances within the platform.",
  },
  {
    icon: <ArrowUpNarrowWide size={40} style={{ color: "rgba(32,169,83,255)" }}/>,
    title: "Expand Your Reach",
    description:
      "Utilize the platform to connect with a wider audience of potential clients",
  },
  {
    icon: <Clock9 size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Save Time",
    description:
      "Automate administrative tasks and free up your time to focus on coaching.",
  },
  {
    icon: <ShoppingCart size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Manage Memberships",
    description:
      "Create and manage membership levels, benefits, and renewals for your coaching services.",
  },
  {
    icon: <DatabaseBackup size={40} style={{ color: "rgba(32,169,83,255)" }} />,
    title: "Data and Insights",
    description:
      "Leverage data-driven insights to understand your client base, improve your services, and optimize your business strategy.",
  },
  
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Embark on your journey to a healthier you. Our step-by-step guide simplifies the process and helps you achieve your fitness goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
