import { useNavigate } from "react-router-dom";

// ant icons
import { BarChartOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";

import MemberReport from './components/MemberReport';
import TaskReport from './components/TaskReport';

function Report() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="header__container">
          <div className="dashboard" style={{ width: 30, flexShrink: 0 }}  onClick={() => navigate('/report')}>
            <BarChartOutlined size={15} />
          </div>
          <div className="header__logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
          <div className="header__right">
            <div className="header__avatar">
              <img src="/assets/images/avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container px-2">
          <h3>Report</h3> <br />
          <div style={{ width: '100%', gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 10 }}>
              <div style={{ width: '49%' }}>
                <Card 
                  title="Task" 
                  size="small"
                  extra={
                    <Button type="text">
                      Export CSV
                    </Button>
                  }
                >
                  <TaskReport />
                </Card>
              </div>
              <div style={{ width: '49%' }}>
                <Card 
                  title="Member" 
                  size="small"
                  extra={
                    <Button type="text">
                      Export CSV
                    </Button>
                  }
                >
                  <MemberReport />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Report