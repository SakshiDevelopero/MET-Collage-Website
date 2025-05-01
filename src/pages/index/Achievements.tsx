
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Styled Components
const AchievementsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url('/src/assets/images/achievement.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 800;

  span {
    color: #e31837;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const AchievementCard = styled(motion.div)`
  text-align: center;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Number = styled(motion.h3)`
  font-size: 3.3rem;
  font-weight: 800;
  color: #e31837;
  margin-bottom: 10px;
`;

const Label = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 80px;
`;

const HighlightCard = styled(motion.div)`
  background: rgba(227, 24, 55, 0.1);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(227, 24, 55, 0.3);
`;

const HighlightTitle = styled.h4`
  font-size: 1.5rem;
  color: #e31837;
  margin-bottom: 15px;
  font-weight: 700;
`;

const HighlightText = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

// Data types
interface Achievement {
  number: number;
  label: string;
}

interface Highlight {
  title: string;
  text: string;
}

// Static data
const achievements: Achievement[] = [
  { number: 19, label: "Years of Excellence" },
  { number: 10000, label: "Alumni Network" },
  { number: 100, label: "Industry Partners" },
  { number: 80, label: "Placement Rate %" }
];

const highlights: Highlight[] = [
  {
    title: "Academic Excellence",
    text: "NAAC ‘A’ Grade accredited, ranked among India’s top MBA colleges, and recognized for quality education and research."
  },
  {
    title: "Research Impact",
    text: "1000+ papers published in international journals, with active PhD programs and funded research projects."
  },
  {
    title: "Global Recognition",
    text: "International collaborations with leading global universities, including the University of London."
  }
];

// Counter component
interface CounterProps {
  target: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      let startTime: number | undefined;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(target * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      controls.start({ opacity: 1, y: 0 });

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [inView, target, duration, controls]);

  return <Number ref={ref}>{count.toLocaleString()}+</Number>;
};

// Main Component
const Achievements: React.FC = () => {
  return (
    <AchievementsSection>
      <Container>
        <Title>Our <span>Achievements</span></Title>
        <Subtitle>
          Celebrating decades of academic excellence, innovation, and success in shaping future leaders
        </Subtitle>

        <Grid>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Counter target={achievement.number} />
              <Label>{achievement.label}</Label>
            </AchievementCard>
          ))}
        </Grid>

        <HighlightGrid>
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <HighlightTitle>{highlight.title}</HighlightTitle>
              <HighlightText>{highlight.text}</HighlightText>
            </HighlightCard>
          ))}
        </HighlightGrid>
      </Container>
    </AchievementsSection>
  );
};

export default Achievements;
