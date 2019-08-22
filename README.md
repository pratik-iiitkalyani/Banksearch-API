# Banksearch-API
Question->
Essentials your applications should have->
Autocomplete API to return possible matches based on the branch name ordered by IFSC code (ascending order) with limit and offset.
Endpoint->/api/branches/autocomplete?q=<>
Example->/api/branches/autocomplete?q=RTGS&limit=3&offset=0
Sample response: 
{
 "branches": [{
   "ifsc": "ABHY0065001",
   "bank_id": 60,
   "branch": "RTGS-HO",
   "address": "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
   "city": "MUMBAI",
   "district": "GREATER MUMBAI",
   "state": "MAHARASHTRA"
 }, {
   "ifsc": "ABNA0000001",
   "bank_id": 110,
   "branch": "RTGS-HO",
   "address": "414 EMPIRE COMPLEX, SENAPATI BAPAT MARG LOWER PAREL WEST MUMBAI 400013",
   "city": "MUMBAI",
   "district": "GREATER BOMBAY",
   "state": "MAHARASHTRA"
 }, {
   "ifsc": "ADCB0000001",
   "bank_id": 143,
   "branch": "RTGS-HO",
   "address": "75, REHMAT MANZIL, V. N. ROAD, CURCHGATE, MUMBAI - 400020",
   "city": "MUMBAI",
   "district": "MUMBAI CITY",
   "state": "MAHARASHTRA"
 }, {
   "ifsc": "ADCC0000001",
   "bank_id": 61,
   "branch": "RTGS-HO",
   "address": "THE AKOLA DISTRICT CENTRAL COOP. BANK LTD., P.B.NO. 8, CIVIL LINES, S.A. COLLEGE ROAD, AKOLA. 444001",
   "city": "AKOLA",
   "district": "AKOLA",
   "state": "MAHARASHTRA"
 }]
}
