import { Container } from "../shared/Container";
import { Number } from "../shared/Number";

export const Numbers = () => {
  return (
    <section className="relative mt-8 md:mt-12">
      <Container className="flex justify-center items-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg 
                    border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                    grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 "
        >
          <Number title="100+" text="AI Models Implemented" />
          <Number title="250+" text="Enterprice Clients" />
          <Number title="99.9%" text="Uptime Quaarantee" />
          <Number title="10+" text="Years of Innovation" />
        </div>
      </Container>
    </section>
  );
};
