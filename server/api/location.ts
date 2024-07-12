import { PersonalLocation } from "~/types";

export default defineEventHandler(async () => {
  try {
    const location = (
      await (
        await fetch(`https://api.pixelic.dev/v2/location`, {
          headers: {
            Authorization: process.env.PERSONAL_API_TOKEN as string,
          },
        })
      ).json()
    ).location;
    return {
      country: {
        prefix: location.country.prefix,
        name: location.country.name,
        code: location.country.code,
      },
      weather: {
        temperature: {
          current: location.weather.temperature.current.toFixed(1),
        },
        cloudCover: location.weather.cloudCover,
        isRaining: location.weather.isRaining,
        isSnowing: location.weather.isSnowing,
      },
      time: {
        timezone: location.time.timezone,
      },
    } as PersonalLocation;
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Unable to retrieve Location data!",
    });
  }
});
