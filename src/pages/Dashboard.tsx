import { Bar, Line, Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from 'chart.js';
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement);

export const dataPie = {
    labels: ['Metal', 'Cartón', 'Vidrio', 'Papel', 'Organico', ],
    datasets: [
      {
        data: [54, 30, 25, 46, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Promedio total de residuos mensual',
      },
    },
  };
  
  const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre'];
  
  export const dataBar = {
    labels,
    datasets: [
      {
        label: 'Promedio en (kg)',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
        backgroundColor: '#5b4ee3',
      },
    ],
  };

  export const options2 = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        // text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  
  const labels2 = ['2021', '2022'];
  
  export const data = {
    labels: labels2,
    datasets: [
      {
        label: 'Residuos',
        data: labels2.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

const Dashboard = () => {
  return (
     <div className="ms-3 mb-3 me-3 mt-3">
        <Row>
            <Col lg={ 12 } md={ 12 }>
                <h1>Dashboard</h1>
            </Col>
        </Row>
        <Row lg={ 12 } className="">
            <Col lg={ 6 } md={ 6 }>
                <Card>
                    <CardHeader>
                        {'Residuos recogido por clasificación (% de este mes)'}
                    </CardHeader>
                    <CardBody>
                        <div style={{ height: '350px' }}>
                            <Pie 
                                data={ dataPie }
                                options={{ maintainAspectRatio: false, responsive: true, }}
                            />
                        </div>
                    </CardBody>                    
                </Card>
            </Col>
            <Col lg={ 6 } md={ 6 }>
                <Card>
                    <CardHeader>
                        Total
                    </CardHeader>
                    <CardBody>
                        <div style={{ height: '350px' }}>
                            <Bar options={options} data={ dataBar } />
                        </div>
                    </CardBody>                    
                </Card>
            </Col>
        </Row>
        <Row className="mt-1">
            <Col lg={ 6 } md={ 6 }>
                <Card>
                    <CardHeader>
                    {'Nivel de recolección de residuos (por años)'}
                    </CardHeader>
                    <CardBody>
                        <div style={{ height: '350px' }}>
                        <Bar options={options2} data={data} />
                        </div>
                    </CardBody>                    
                </Card>
            </Col>
        </Row>
    </div>
  )
}
export default Dashboard