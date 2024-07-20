"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";

interface ListItemLinkProps extends ListItemProps {
  to: string;
  open?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  "/inbox": "Inbox",
  "/inbox/important": "Important",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts",
};

function ListItemLink(props: ListItemLinkProps) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItemButton component="a" {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="pt-[2rem]">
        <h2 className="text-[1.4rem] font-[450] pl-[2rem] ">_about-me</h2>
      </div>
      <Box sx={{ display: "flex", flexDirection: "column", width: 360 }}>
        <Box
          sx={{
            bgcolor: "background.paper",
            mt: 1,
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <List>
            <ListItem onClick={handleClick}>
              <ListItemButton>
                <ListItemText primary="Info" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem onClick={() => handleOptionClick("Important")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Important" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
            <ListItem onClick={() => handleOptionClick("Trash")}>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={() => handleOptionClick("Spam")}>
              <ListItemButton>
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Typography className=" pl-[2rem] " variant="body1" sx={{ mt: 2 }}>
          <span className=" text-[1.6rem] font-[450]">{"// Info  "}</span>
          <span className="text-greyText font-[450] text-[1.6rem]">
            {" "}
            {"/ " + selectedOption}
          </span>
        </Typography>
      </Box>
    </>
  );
}
