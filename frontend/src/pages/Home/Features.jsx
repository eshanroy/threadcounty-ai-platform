import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import FeatureCard from "../../components/common/FeatureCard";

import { FEATURES } from "../../data/constants";

function Features() {
  return (
    <section className="py-28 bg-white">

      <Container>

        <SectionTitle
          badge="Platform Features"
          title="Everything You Need for Textile Intelligence"
          subtitle="Designed for manufacturers, researchers, quality inspectors, and students with modern AI-powered workflows."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}

export default Features;