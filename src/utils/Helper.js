import Swal from 'sweetalert2';

class Helper {
    static setloading = () => {
        Swal.fire({
            title: 'Loading...',
            timerProgressBar: true,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
            showConfirmButton: false,
        });
    }

    static closeLoading = () => {
        Swal.close();
    }

    static AlertInfo = (title, text) => {
        Swal.fire({
            title: title,
            text: text,
            icon: 'info',
        });
    }

    static setlimitText = (text, limit=20) => {
        if (text === undefined || text === null) {
            return ''; // Or some other default value or handling
        }
        
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        } else {
            return text;
        }
    }

    static formatTitle = (title) => {
        let cleanTitle = title.replace(/[^a-zA-Z0-9\s]/g, '');
        let formattedTitle = cleanTitle.replace(/\s+/g, '-');
        return formattedTitle;
    }

    static componentLoading = () => {
        return (
            <div className="spinner-border m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
}

export default Helper;

