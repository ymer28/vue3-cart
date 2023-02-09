import noPic from '../assets/images/nopicture.jpg'
export default {
	methods: {
		displayProductsPic(productImg) {
			return productImg !== null ? productImg : noPic;
		},
		convertPrice(priceInCents) {
			// format number to Euro
			let euro = Intl.NumberFormat('fr-FR', {
					style: 'currency',
					currency: 'EUR',
			});
			return euro.format(priceInCents/100);
		},
	}  
}