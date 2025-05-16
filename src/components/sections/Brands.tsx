import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos: string[] = [
  "discord",
  "openai",
  "paypal",
  "slack",
  "spotify",
  "youtube",
];

export const Brands = () => {
  return (
    <section>
      <Container className="space-y-5">
        <div className="max-w-3xl mx-auto">
          <Title>Trusted by big companies</Title>
        </div>

        <div className="flex justify-center flex-wrap gap-4">
          {logos &&
            logos.map((logo, key) => (
              <div key={key} className="p-4 sm:p-5 rounded-xl bg-body  ">
                <img
                  src={`/logos/${logo}.png`}
                  width="100"
                  height="60"
                  alt={logo}
                  className="h-6 sm:h-10 w-auto ease-linear duration-300 grayscale hover:!grayscale-0 hover:scale-105"
                />
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};
