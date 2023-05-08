import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchResource() {
      const axiosRes = await axios.get("/api/activeresource");
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        "seconds"
      );
      const updatedTimeToFinsh = timeToFinish * 60 - elapsedTime;

      if (updatedTimeToFinsh >= 0) {
        resource.timeToFinish = updatedTimeToFinsh;
        setSeconds(updatedTimeToFinsh);
      }
      setResource(resource);
    }
    fetchResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    if (seconds < 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const completeResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "complete" })
      .then((_) => location.reload())
      .catch((_) => alert("cannot complete the resource"));
  };

  const hasResource = resource && resource.id;
  return (
    <div className="active-resource p-6">
      <h1 className="resource-name">
        {hasResource ? (
          resource.title
        ) : (
          <img width={100} className="w-100" src={"load.gif"} />
        )}
      </h1>
      <div className="time-wrapper">
        {hasResource &&
          (seconds > 0 ? (
            <h2 className="elapsed-time">{seconds}</h2>
          ) : (
            <button onClick={completeResource} className="button is-success ml-1">Click and Done!</button>
          ))}
      </div>
      {hasResource ? (
        <Link className="button" href={`/resources/${resource.id}`}>
          Go to resource
        </Link>
      ) : (
        <Link className="button" href={"/"}>
          Go to resources
        </Link>
      )}
    </div>
  );
};

export default ActiveResource;
