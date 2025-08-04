import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
  CardHeader,
  CardActions,
} from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { FaSlideshare } from "react-icons/fa";
import styled from "@emotion/styled";
import Cookies from "js-cookie";
import axios from "axios";
import EventIcon from "@mui/icons-material/Event";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const EventCard = ({ event, onApply }) => (
  <Card
    sx={{
      width: "20rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      boxShadow: 3,
      borderRadius: 4,
      p: 2,
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.03)",
      },
    }}
  >
    <CardHeader
      avatar={<Avatar sx={{ bgcolor: "primary.main" }}><EventIcon /></Avatar>}
      title={<Typography variant="h6" sx={{ fontWeight: "bold" }}>{event.name}</Typography>}
      subheader={`Date: ${new Date(event.date).toLocaleDateString()} at ${event.hour}`}
    />
    <CardContent>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        <strong>Description:</strong> {event.description}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => onApply(event.id)}
        sx={{ borderRadius: "20px", textTransform: "none" }}
      >
        Apply Now
      </Button>
    </CardActions>
  </Card>
);

function UserDashboard() {
  const [username, setUsername] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = Cookies.get("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/events")
      .then((response) => {
        setFilteredEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleApplyEvent = (eventId) => {
    console.log("Navigating with eventId:", eventId);
    navigate(`/registerQR`, { state: { eventId } });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <StyledAppBar position="absolute">
        <Toolbar>
          <IconButton color="inherit"><FaSlideshare /></IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>User Dashboard</Typography>
          <Typography>Hello, {username}</Typography>
          <IconButton color="inherit" onClick={() => { Cookies.remove("username"); navigate("/login"); }}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
        <Grid container spacing={3}>
          {filteredEvents.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4}>
              <EventCard event={event} onApply={handleApplyEvent} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default UserDashboard;
