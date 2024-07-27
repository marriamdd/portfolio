"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Data from "/Users/mariamidavitashvili/portfolio/data.json";
import { Checkbox } from "antd";
import { FormControlLabel } from "@mui/material";
import { ISetFilteredProducts } from "../projects/page";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({
  setChecked,
  checked,
}: {
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
  checked: string[];
}) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleCheckboxChange = (name: string) => {
    setChecked((prevChecked) =>
      prevChecked.includes(name)
        ? prevChecked.filter((item) => item !== name)
        : [...prevChecked, name]
    );
  };

  return (
    <div className="flex w-[100%] xl:w-[23%] xl:border-r border-[#1E2D3D] animate-fadeIn">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleAccordionChange("panel1")}
      >
        <AccordionSummary
          sx={{
            width: "100%",
            "&:hover": {
              background: "#1E2D3D",
            },
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <h2>TechStacks</h2>
        </AccordionSummary>
        {Data.techStacks.map((skill) => (
          <AccordionDetails
            sx={{
              color: checked.includes(skill) ? "#fff" : "#607b96",
            }}
            className="animate-fadeIn"
            key={skill}
          >
            <FormControlLabel
              label={skill}
              control={
                <Checkbox
                  checked={checked.includes(skill)}
                  onChange={() => handleCheckboxChange(skill)}
                  aria-label="controlled"
                  value={skill}
                  className="custom-checkbox"
                />
              }
            />
          </AccordionDetails>
        ))}
      </Accordion>
    </div>
  );
}
