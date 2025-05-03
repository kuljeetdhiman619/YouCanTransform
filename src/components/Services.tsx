import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Client Management",
    description:
      "Streamline client interactions, track session history, and manage client data efficiently.",
    icon: <ChartIcon />,
  },
  {
    title: "Appointment Scheduling",
    description:
      "Simplify booking with automated scheduling and reminders, reducing no-shows.",
    icon: <WalletIcon />,
  },
  {
    title: "Communication Tools",
    description:
      "Connect with clients via integrated messaging, email, and notifications.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor client achievements, provide feedback, and adjust coaching plans for optimal results.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Payment Processing",
    description:
      "Securely process payments, manage invoices, and track revenue within the platform.",
    icon: <ChartIcon />,
  },

];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Facilitate seamless transactions, generate detailed invoices, and gain clear insights into your revenue streams.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
