import { pricing } from "../../utils/prices";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
      {" "}
      <Container className="text-center">
        <Title>Pricing </Title>
        <Paragraph className="mt-4">
          Choose the plan that's right for your business.
        </Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, key) => (
            <div key={key} className="relative group h-full p-5">
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div
                  className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow
                                p-8 flex flex-col h-full relative text-center"
                >
                  {plan.bestValue && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                                                    text-white text-xs font-bold uppercase tracking-wider
                                                    px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                    >
                      Best Value
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-heading-1">
                    {" "}
                    {plan.title}
                  </h3>
                  <p className="mt-4 text-4xl font-bold text-heading-1">
                    {" "}
                    {plan.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3 mx-auto">
                    {plan.features.map((feature, keyFeatures) => (
                      <li key={keyFeatures} className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-violet-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">
                      Choose Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
