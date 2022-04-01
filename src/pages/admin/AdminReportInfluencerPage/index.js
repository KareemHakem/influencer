import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../commons/Error";
import { Loading } from "../../../commons/Loading";
import AdminReportInfluencer from "../../../components/adminComponents/AdminReportInfluencer";
import { getReports } from "../../../redux/getReports/action";

export default function AdminReportInfluencerPage() {
  const { reports, loading, error } = useSelector((state) => state.reports);
  const dispatch = useDispatch();

  console.log(reports);

  useEffect(() => {
    dispatch(getReports());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div>
      <AdminReportInfluencer reports={reports} />
    </div>
  );
}
