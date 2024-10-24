import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CommonCard from '../CommonComponents/CommonCard/CommonCard';
import axios from 'axios';
import Paginations from '../CommonComponents/Paginations/Paginations';

function Upcoming() {
    const [upcomingData, setUpcomingData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
                setUpcomingData(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = upcomingData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <section className='popular_section mt-5 mb-5'>
            <Container>
                <div>
                    <Row>
                        {currentItems.map((item, index) => (
                            <Col xxl={3} xl={3} lg={4} md={6} sm={6} key={index}>
                                <div className='craddsection'>
                                    <CommonCard data={item} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className='d-flex justify-content-center'>
                        <Paginations
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={upcomingData.length}
                            paginate={(pageNumber) => setCurrentPage(pageNumber)}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Upcoming;
