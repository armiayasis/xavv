const config = {
    name: "report",
    description: "report to mods",
    usage: "[text/attachment/reply]",
    cooldown: 3,
    permissions: [0, 1, 2],
    credits: "XaviaTeam"
}

const langData = {
    "vi_VN": {
        "report_no_content": "Bạn chưa nhập/reply tin nhắn nào để report hoặc file đính kèm không được hỗ trợ!",
        "report_content": "📢 Báo cáo từ {reporterName} ({senderID})\n📌 Thread: {reporterThreadName} ({threadID})\n📝 Nội dung:\n{content}",
        "report_failed": "Gửi báo cáo thất bại, vui lòng thử lại sau!",
        "report_success": "Đã gửi báo cáo đến {reportSuccess} quản trị bot!",
        "not_mod": "Bạn không phải là quản trị viên của bot!",
        "reply_content": "📬 Phản hồi từ {senderName} ({senderID})\n📝 Nội dung:\n{content}",
        "error": "Đã có lỗi xảy ra, vui lòng thử lại sau!"
    },
    "en_US": {
        "report_no_content": "You have not entered/replied any message to report or the attached file is not supported!",
        "report_content": "📢 Report from {reporterName} ({senderID})\n📌 Thread: {reporterThreadName} ({threadID})\n📝 Content:\n{content}",
