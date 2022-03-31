import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminReportInfluencer from "../../../components/adminComponents/AdminReportInfluencer";
import { getReports } from "../../../redux/getReports/action";

export default function AdminReportInfluencerPage() {
  const {reports, loading, error}= useSelector(state => state.reports)
  const dispatch = useDispatch()
  console.log(reports, 'reports')
  useEffect(()=>{
    dispatch(getReports())
  },[dispatch])

// if(loading) return <Loading />
// if(error) return <Error />
  return (
    <div>
      <AdminReportInfluencer />
    </div>
  );
}
