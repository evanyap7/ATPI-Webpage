// ATPI Asia Market Overview Application
class ATPIMarketOverview {
    constructor() {
        this.data = [
            {
                "Country": "Greater CN\n- incl. HKG",
                "DirectxATPI": "Subsidiary & Joint Venture (Marine)",
                "GDP_Rank": "2",
                "ATPI_Rank": "21",
                "DTA_Potential": "**",
                "Corporate": "Yes",
                "Marine": "Yes* \nLimited by JV",
                "Energy": "Yes",
                "Mining": "Yes",
                "Student": "Yes",
                "OBT": "Local CN\nLarge Dom volume",
                "GDS": "TravelSky",
                "Avenir": "?",
                "Business_Travel_Commentary": "Projected to spend $373.1 billion in 2025, making it the largest in Asia and the second largest globally."
            },
            {
                "Country": "India",
                "DirectxATPI": "Subsidiary",
                "GDP_Rank": "4",
                "ATPI_Rank": "6",
                "DTA_Potential": "***",
                "Corporate": "Yes",
                "Marine": "Yes",
                "Energy": "Yes",
                "Mining": "Limited",
                "Student": "Yes",
                "OBT": "Local\nLarge Dom volume",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "Y",
                "Business_Travel_Commentary": "Anticipated to be one of the world's fastest-growing markets, with spending growth projected at 23.9%"
            },
            {
                "Country": "Japan",
                "DirectxATPI": "Partner",
                "GDP_Rank": "5",
                "ATPI_Rank": "-",
                "DTA_Potential": "*",
                "Corporate": "Limited",
                "Marine": "Ranked 3rd Shipowners",
                "Energy": "Yes",
                "Mining": "Limited",
                "Student": "Limited",
                "OBT": "Local\nLarge Dom volume",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "Y",
                "Business_Travel_Commentary": "Remains a top global market, with spending anticipated to grow by 10.9% in 2025."
            },
            {
                "Country": "South Korea",
                "DirectxATPI": "Subsidiary",
                "GDP_Rank": "13",
                "ATPI_Rank": "23",
                "DTA_Potential": "**",
                "Corporate": "Yes",
                "Marine": "Yes\nRanked 5th in Shipowners",
                "Energy": "Yes\nNew Fields opened in 2024",
                "Mining": "Limited",
                "Student": "Limited",
                "OBT": "International",
                "GDS": "Topaz\nAmadeus\nSabre",
                "Avenir": "Y",
                "Business_Travel_Commentary": "Expected to have the highest spending growth in the region at 28.3% in 2025."
            },
            {
                "Country": "Indonesia",
                "DirectxATPI": "Subsidiary*",
                "GDP_Rank": "17",
                "ATPI_Rank": "24",
                "DTA_Potential": "*",
                "Corporate": "Yes",
                "Marine": "Yes\nRanked high in Container vessels",
                "Energy": "Yes",
                "Mining": "Yes",
                "Student": "Limited",
                "OBT": "Local",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "Y",
                "Business_Travel_Commentary": "A major market whose capital, Jakarta, is a top 10 most-visited city for APAC business travelers."
            },
            {
                "Country": "Taiwan",
                "DirectxATPI": "Subsidiary",
                "GDP_Rank": "22",
                "ATPI_Rank": "25",
                "DTA_Potential": "*",
                "Corporate": "Yes",
                "Marine": "Limited",
                "Energy": "Limited",
                "Mining": "Limited",
                "Student": "Limited",
                "OBT": "International",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "Y",
                "Business_Travel_Commentary": "Its capital, Taipei, is consistently listed among the top 10 most visited business cities in APAC. Strategic for Semiconductor manufacturing with TSMC as 9th largest company in the world."
            },
            {
                "Country": "Singapore",
                "DirectxATPI": "Subsidiary\nRegional HQ",
                "GDP_Rank": "28",
                "ATPI_Rank": "8",
                "DTA_Potential": "**",
                "Corporate": "Yes",
                "Marine": "Yes",
                "Energy": "Yes",
                "Mining": "Limited",
                "Student": "Yes",
                "OBT": "International",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "Y",
                "Business_Travel_Commentary": "Leading Hub in Southeast Asia; most visited city/country in the region for APAC business travelers due to its strategic location and pro-business infrastructure. Typically the HQ are registered in SG with work managed in other ASEAN locations"
            },
            {
                "Country": "Thailand",
                "DirectxATPI": "Subsidiary",
                "GDP_Rank": "30",
                "ATPI_Rank": "26",
                "DTA_Potential": "*",
                "Corporate": "Yes",
                "Marine": "Yes",
                "Energy": "Yes",
                "Mining": "Limited",
                "Student": "Limited",
                "OBT": "International",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "Y",
                "Business_Travel_Commentary": "A leading market in Southeast Asia with projected high demand, particularly in its capital, Bangkok, which is a key travel gateway"
            },
            {
                "Country": "Philippines",
                "DirectxATPI": "Subsidiary",
                "GDP_Rank": "33",
                "ATPI_Rank": "5",
                "DTA_Potential": "**",
                "Corporate": "Yes",
                "Marine": "Yes",
                "Energy": "Yes",
                "Mining": "Yes",
                "Student": "Yes",
                "OBT": "International",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "Y",
                "Business_Travel_Commentary": "Ranked in top 3 for seafarers supply on ships esp. cadets"
            },
            {
                "Country": "Vietnam",
                "DirectxATPI": "Partner\nTicketing Hub",
                "GDP_Rank": "34",
                "ATPI_Rank": "-",
                "DTA_Potential": "NaN",
                "Corporate": "Limited",
                "Marine": "Limited",
                "Energy": "Limited",
                "Mining": "Limited",
                "Student": "Limited",
                "OBT": "International",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "?",
                "Business_Travel_Commentary": "Identified as a significant growth market fueled by a growing middle class and increased air capacity."
            },
            {
                "Country": "Malaysia",
                "DirectxATPI": "Subsidiary*\nBumiputera",
                "GDP_Rank": "37",
                "ATPI_Rank": "16",
                "DTA_Potential": "**",
                "Corporate": "Yes",
                "Marine": "Yes",
                "Energy": "Yes",
                "Mining": "Limited",
                "Student": "Limited",
                "OBT": "International",
                "GDS": "Amadeus\nSabre\nTravelport",
                "Avenir": "Y",
                "Business_Travel_Commentary": "A significant market, driven by high-traffic travel corridors like the Kuala Lumpur–Singapore route."
            },
            {
                "Country": "Brunei",
                "DirectxATPI": "Partner\nTicketing Hub",
                "GDP_Rank": "135",
                "ATPI_Rank": "-",
                "DTA_Potential": "NaN",
                "Corporate": "Limited",
                "Marine": "Yes",
                "Energy": "Limited",
                "Mining": "Limited",
                "Student": "Limited",
                "OBT": "International",
                "GDS": "Sabre",
                "Avenir": "?",
                "Business_Travel_Commentary": "Heavily reliant on Oil & Gas, its small population and economic size translate to a lower aggregate business travel volume."
            }
        ];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateMarketOverview();
        this.populateBusinessIntelligence();
    }

    setupEventListeners() {
        const marketOverviewBtn = document.getElementById('marketOverviewBtn');
        const businessIntelBtn = document.getElementById('businessIntelBtn');

        marketOverviewBtn.addEventListener('click', () => {
            this.showView('marketOverview');
            this.setActiveButton(marketOverviewBtn);
        });

        businessIntelBtn.addEventListener('click', () => {
            this.showView('businessIntel');
            this.setActiveButton(businessIntelBtn);
        });
    }

    showView(viewId) {
        // Hide all views
        const views = document.querySelectorAll('.view-section');
        views.forEach(view => view.classList.remove('active'));

        // Show selected view
        const targetView = document.getElementById(viewId);
        if (targetView) {
            targetView.classList.add('active');
        }
    }

    setActiveButton(activeBtn) {
        // Remove active class from all buttons
        const buttons = document.querySelectorAll('.nav-btn');
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        activeBtn.classList.add('active');
    }

    formatValue(value, type = 'default') {
        if (value === null || value === undefined || value === 'NaN' || value === '') {
            return '<span class="status-no"><i class="fas fa-minus-circle icon-dash"></i>-</span>';
        }

        switch (type) {
            case 'dta':
                if (value.includes('*')) {
                    const starCount = (value.match(/\*/g) || []).length;
                    const stars = Array(starCount).fill('<i class="fas fa-star icon-star"></i>').join('');
                    return `<span class="dta-stars">${stars}</span>`;
                }
                return value === 'NaN' ? '<span class="status-no"><i class="fas fa-minus-circle icon-dash"></i>-</span>' : value;
            
            case 'status':
                const lowerValue = value.toLowerCase();
                if (lowerValue.includes('yes')) {
                    return `<span class="status-yes"><i class="fas fa-check-circle icon-check"></i>${value.replace(/\n/g, '<br>')}</span>`;
                } else if (lowerValue.includes('limited') || lowerValue.includes('ranked')) {
                    return `<span class="status-limited"><i class="fas fa-exclamation-triangle icon-warning"></i>${value.replace(/\n/g, '<br>')}</span>`;
                } else if (value === 'No' || value === '-') {
                    return `<span class="status-no"><i class="fas fa-times-circle icon-dash"></i>-</span>`;
                }
                return value.replace(/\n/g, '<br>');
            
            case 'multiline':
                return value.replace(/\n/g, '<br>');
            
            case 'rank':
                if (value === '-') {
                    return '<span class="status-no"><i class="fas fa-minus-circle icon-dash"></i>-</span>';
                }
                return `<span class="icon-rank"><i class="fas fa-chart-line"></i></span>${value}`;
            
            case 'avenir':
                if (value === 'Y') {
                    return `<span class="avenir-yes"><i class="fas fa-check-circle icon-check"></i>Y</span>`;
                } else if (value === '?') {
                    return `<span class="avenir-unknown"><i class="fas fa-question-circle icon-warning"></i>?</span>`;
                }
                return `<span class="avenir-no"><i class="fas fa-times-circle icon-dash"></i>-</span>`;
            
            default:
                return value;
        }
    }

    populateMarketOverview() {
        const tbody = document.getElementById('marketOverviewBody');
        if (!tbody) return;

        tbody.innerHTML = '';

        this.data.forEach(country => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td><i class="fas fa-map-marker-alt icon-location"></i>${this.formatValue(country.Country, 'multiline')}</td>
                <td>${this.formatValue(country.GDP_Rank, 'rank')}</td>
                <td>${this.formatValue(country.ATPI_Rank, 'rank')}</td>
                <td>${this.formatValue(country.DTA_Potential, 'dta')}</td>
                <td>${this.formatValue(country.Corporate, 'status')}</td>
                <td class="multi-line-cell">${this.formatValue(country.Marine, 'status')}</td>
                <td class="multi-line-cell">${this.formatValue(country.Energy, 'status')}</td>
                <td>${this.formatValue(country.Mining, 'status')}</td>
                <td>${this.formatValue(country.Student, 'status')}</td>
            `;

            tbody.appendChild(row);
        });
    }

    populateBusinessIntelligence() {
        const tbody = document.getElementById('businessIntelBody');
        if (!tbody) return;

        tbody.innerHTML = '';

        this.data.forEach(country => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td><i class="fas fa-map-marker-alt icon-location"></i>${this.formatValue(country.Country, 'multiline')}</td>
                <td class="multi-line-cell"><i class="fas fa-plane-departure icon-rank"></i>${this.formatValue(country.OBT, 'multiline')}</td>
                <td class="multi-line-cell"><i class="fas fa-server icon-rank"></i>${this.formatValue(country.GDS, 'multiline')}</td>
                <td class="avenir-cell">${this.formatValue(country.Avenir, 'avenir')}</td>
                <td class="commentary-cell"><i class="fas fa-comment-alt icon-rank"></i>${this.formatValue(country.Business_Travel_Commentary)}</td>
            `;

            tbody.appendChild(row);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ATPIMarketOverview();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    // Force table reflow on resize for better responsive behavior
    const tables = document.querySelectorAll('.data-table');
    tables.forEach(table => {
        table.style.display = 'none';
        table.offsetHeight; // Trigger reflow
        table.style.display = '';
    });
});

// Print functionality
window.addEventListener('beforeprint', () => {
    // Show both views for printing
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => view.classList.add('active'));
});

window.addEventListener('afterprint', () => {
    // Restore view state after printing
    const activeBtn = document.querySelector('.nav-btn.active');
    if (activeBtn) {
        if (activeBtn.id === 'marketOverviewBtn') {
            document.getElementById('businessIntel').classList.remove('active');
        } else {
            document.getElementById('marketOverview').classList.remove('active');
        }
    }
});