// MeetingWise cost calculation utility

function calculateMeetingCost({ attendees, salary, duration }) {
  // Assume salary is annual, duration in minutes
  const costPerMinute = salary / 2080 / 60;
  return attendees * costPerMinute * duration;
}

module.exports = { calculateMeetingCost };
