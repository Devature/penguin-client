{/* TODO: Change the index of tickets to use a ticket ID system, pulled from the backend */}
{/* The xs, sm, md signifiers in the grid are how the layout should be displayed on different sized devices
    MUI defines xs as <600px wide, 600px< sm <900px, and 900px<md<1200px
    MUI uses a 12 column grid layout, so this is the # of columns an item should span given the screen width
    -- Aaron*/}


import React from 'react';
import {Grid, Container} from '@mui/material';
import TicketCard from '../components/ticketpage/TicketCard';

const TicketsPage = () => {
    const tickets = [
        {ticketName: 'Test Ticket 1', issueList: ['Do things', 'Do more things', 'Do yet more things'],
            issueDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {ticketName: 'Test Tick 2', issueList: ['12345', 'Test', 'Oatmeal', 'Raisins', 'Bananers'],
            issueDetails: 'Sometimes when Im out for a stroll it rains on me, and then I melt. Please fix this!'
            },
        {ticketName: 'Tester Ticket Numero Dos', issueList: ['Someone ate my cheerios!', 'Help, Im stuck in the fridge!'],
            issueDetails: 'I once had a dream where I was a spider. Scary!'},
        {ticketName: 'Tester Ticket Numero Dos', issueList: ['Someone ate my cheerios!', 'Help, Im stuck in the fridge!'],
                    issueDetails: 'I once had a dream where I was a spider. Scary!'},
        {ticketName: 'Tester Ticket Numero Dos', issueList: ['Someone ate my cheerios!', 'Help, Im stuck in the fridge!'],
                    issueDetails: 'I once had a dream where I was a spider. Scary!'},
        ];


    return (
        <Container>
            <Grid container
                spacing={2}
                justifyContent="left"
                sx={{
                    display: 'flex',
                    flexWrap: 'nowrap', //this prevents tickets from wrapping, meaning they scroll instead
                    overflowX: 'auto', //enables scrolling horizontally
                    maxWidth: '100%',
                    paddingBottom: '10px',
                    paddingTop: '20px',
                    //scrollbar styling
                    '&::-webkit-scrollbar': {
                              height: '2vh',  // Sets the height of the horizontal scrollbar
                            },
                            '&::-webkit-scrollbar-thumb': {
                              background: 'rgba(0, 0, 0, 0.3)',  // Scrollbar thumb color
                              borderRadius: '4px',  // Rounded corners for the thumb
                              border: '2px solid transparent',  // Adding border around the thumb
                              backgroundClip: 'content-box',  // Adds a space around the thumb for a border effect
                            },
                            '&::-webkit-scrollbar-track': {
                              background: '#f1f1f1',  // Scrollbar track background color
                              borderRadius: '4px',  // Rounded corners for the track
                            },
                            '&::-webkit-scrollbar-button': {
                              display: 'none',  // Hide the scrollbar buttons (if any)
                            },
                    }}>
                    {tickets.map((ticket, index) => (
                       <Grid item xs={12} sm={6} md={4} key={index}>
                            <TicketCard ticketName={ticket.ticketName} issueList={ticket.issueList} issueDetails={ticket.issueDetails} />
                       </Grid>
                        ))}
            </Grid>
        </Container>
        );
    };

export default TicketsPage;