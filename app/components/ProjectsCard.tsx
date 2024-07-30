import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
          key={skill.name}
          className={`w-[32px] h-[32px] mx-2 transition-transform duration-500 ease-in-out ${
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
  console.log(Data);
  return (
    <div className="w-full flex justify-center ">
      <div
        className="grid gap-[14rem]   w-full px-[1rem] xl:px-[10rem] py-[5rem] place-items-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key={project.id}
          >
            <h1 className="text-[15px] pl-[1rem] pb-[1rem] text-[#5565E8] font-[700]">
              {`Project ${index + 1}`}{" "}
              <span className="text-[1.6rem] text-greyText font-[450]">
                {`// ${project.name}`}
              </span>
            </h1>
            <Card
              sx={{
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
                    height="140"
                    image={project.img}
                    alt={project.name}
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:blur-sm"
                  />
                  {hoveredCard === project.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
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
                  marginBottom: "1.5rem",
                }}
              >
                <Button
                  className="px-[3rem] py-[1.7rem] transition-all duration-[1s]"
                  size="large"
                  variant="outlined"
                  target="_blank"
                  href={project.liveLink}
                >
                  View Project
                </Button>
                <Link href={project.githubLink} target="_blank">
                  <Image
                    className="cursor-pointer hover:w-[50px] transition-all duration-[1s]"
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
