import axios from 'axios';

export class PortfolioService {

    validatePortfolio(id: number) {
        return axios.get(`/Portfolio/validate?id=${id}`);
    }

}

export default new PortfolioService();
