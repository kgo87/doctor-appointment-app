import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import Profile from "./Doctor/Profile";
import { userApiLink } from "../utils/Constants";
function Home() {
  const [doctors, setDoctors] = useState([]);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get(`${userApiLink}/get-all-approved-doctors`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading())
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading())
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {user?.isDoctor && <Profile />}
      {!user?.isDoctor &&
        <Layout>
          <h1 className="page-title"> Approved Doctors</h1>
          <hr />
          <Row gutter={20}>
            {doctors.map((doctor) => (
              <Col span={8} xs={24} sm={24} lg={8}>
                <Doctor doctor={doctor} />
              </Col>
            ))}
          </Row>
        </Layout>}
    </div>
  );
}

export default Home;