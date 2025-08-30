import React, { useState, useEffect } from 'react';
import homeApi from '../api/homeApi';

// Import all components
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ProgramsSection from '../components/home/ProgramsSection';
import EducationSection from '../components/home/EducationSection';
import DonateCauseSection from '../components/home/DonateCauseSection';
import DonationSection from '../components/home/DonationSection';
import StatsSection from '../components/home/StatsSection';
import HealthSection from '../components/home/HealthSection';
import AchievementsSection from '../components/home/AchievementsSection';
import EnvironmentSection from '../components/home/EnvironmentSection';
import InitiativesSection from '../components/home/InitiativesSection';
import CommunitySection from '../components/home/CommunitySection';
import VolunteerSection from '../components/home/VolunteerSection';
import GetInvolvedSection from '../components/home/GetInvolvedSection';
import BlogsSection from '../components/home/BlogsSection';
import MediaSection from '../components/home/MediaSection';
import ProductsSection from '../components/home/ProductsSection';
import PolicySection from '../components/home/PolicySection';

const HomePage = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const data = await homeApi.getHomeData();
        setHomeData(data);
        setError(null);
      } catch (err) {
        console.error('Error loading home data:', err);
        setError('Failed to load content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!homeData) {
    return null;
  }

  return (
    <div className="home-page">
      <HeroSection data={homeData.hero} />
      <AboutSection data={homeData.about} />
      <ProgramsSection data={homeData.programs} />
      <EducationSection data={homeData.education} />
      <DonateCauseSection data={homeData.donateCause} />
      <DonationSection data={homeData.donations} />
      <StatsSection data={homeData.stats} />
      <HealthSection data={homeData.health} />
      <AchievementsSection data={homeData.achievements} />
      <EnvironmentSection data={homeData.environment} />
      <InitiativesSection data={homeData.initiatives} />
      <CommunitySection data={homeData.community} />
      <VolunteerSection data={homeData.volunteer} />
      <GetInvolvedSection data={homeData.involved} />
      <BlogsSection data={homeData.blogs} />
      <MediaSection data={homeData.media} />
      <ProductsSection data={homeData.products} />
      <PolicySection data={homeData.policy} />
    </div>
  );
};

export default HomePage;