"use client";
import RegionStory from "./region-story";

const Stories = ({ region }: { region: string | null }) => {
  return <RegionStory region={region} />;
};

export default Stories;
