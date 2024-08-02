"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Data from "../../data.json";
import { motion } from "framer-motion";

export default function MultiActionAreaCard({
  checked,
}: {
  checked: string[];
}) {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] = React.useState(Data.projects);

  const onHover = (cardId: number) => {
    setHoveredCard(cardId);
  };

  const onLeave = () => {
    setHoveredCard(null);
  };

  const getSkillIcons = (techstack: string[]) => {
    return Data.skills
      .filter((skill) => techstack.includes(skill.name))
      .map((skill) => (
        <Image
          key={skill.name.toLowerCase()}
          className={`w-8 h-8 mx-2 transition-transform duration-500 ease-in-out ${
            hoveredCard ? "animate-zoom" : ""
          }`}
          height={32}
          width={32}
          src={skill.logo}
          alt={skill.name}
        />
      ));
  };

  React.useEffect(() => {
    if (checked.length === 0) {
      setFilteredProjects(Data.projects);
    } else {
      setFilteredProjects(
        Data.projects.filter((project) =>
          checked.every((check) => project.teckstack.includes(check))
        )
      );
    }
  }, [checked]);

  return (
    <div className="w-full flex justify-center">
      <div
        className="grid gap-[5rem] w-full px-4 md:px-6 lg:px-10 py-10 place-items-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key={project.id}
            className="flex flex-col items-center"
          >
            <div className="flex w-full">
              <h1 className="text-[15px] text-left pl-[1rem] pb-[1rem] text-[#5565E8] font-[700]">
                {`Project ${index + 1}`}{" "}
                <span className="text-xl text-[#607b96] font-normal">
                  {`// ${project.name}`}
                </span>
              </h1>
            </div>

            <Card
              sx={{
                width: "100%",
                maxWidth: 370,

                borderRadius: "9px",
                border: "1.8px solid #1E2D3D",
                background: "rgb(1, 18, 33)",
              }}
            >
              <CardActionArea
                onMouseOver={() => onHover(project.id)}
                onMouseLeave={onLeave}
              >
                <div className="relative">
                  <CardMedia
                    component="img"
                    height="160"
                    image={project.img}
                    alt={project.name}
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:blur-sm"
                  />
                  {hoveredCard === project.id && (
                    <div className="absolute inset-0 flex items-center rounded-[8px] justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
                      <div className="flex flex-wrap gap-5">
                        {getSkillIcons(project.teckstack)}
                      </div>
                    </div>
                  )}
                </div>
              </CardActionArea>
              <CardActions
                sx={{
                  justifyContent: "space-around",
                  paddingInline: "2rem",
                  height: "60px",
                }}
              >
                <Button
                  className="px-6 bg-[#1e2d3d] hover:text-[#5565E8] text-white py-4 transition-all duration-1000"
                  size="large"
                  variant="outlined"
                  target="_blank"
                  href={project.liveLink}
                >
                  View_Project
                </Button>
                <Link href={project.githubLink} target="_blank">
                  <Image
                    className="cursor-pointer hover:w-12 transition-all duration-1000"
                    height={40}
                    width={40}
                    src="/shared/github.svg"
                    alt="GitHub Icon"
                  />
                </Link>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
