function htmlEscape(htmlStr) {
    return htmlStr.replace(/[<>"'&]/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "'":
                return "&#39;";
            case "&":
                return "&amp;";
        }
    });
}

function htmlUnescape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&#39;|&amp;/g, (match) => {
        switch (match) {
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&quot;":
                return '"';
            case "&#39;":
                return "'";
            case "&amp;":
                return "&";
        }
    });
}

export { htmlEscape, htmlUnescape };
