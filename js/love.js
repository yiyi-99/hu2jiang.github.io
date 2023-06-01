// 计时器
function lovexhjSitetime() {
                window.setTimeout("lovexhjSitetime()", 1000);
                var seconds = 1000
                var minutes = seconds * 60
                var hours = minutes * 60
                var days = hours * 24
                var years = days * 365
                var today = new Date()
                var todayYear = today.getFullYear()
                var todayMonth = today.getMonth()+1
                var todayDate = today.getDate()
                var todayHour = today.getHours()
                var todayMinute = today.getMinutes()
                var todaySecond = today.getSeconds()
                // 时间设置
	var t0 = Date.UTC(2023, 04, 23, 14, 48, 00)
                var t1 = Date.UTC(2023, 03, 21, 13, 13, 00)
                var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
                var diff1 = t2 - t1
                var diff1Years = Math.floor(diff1 / years)
                var diff1Days = Math.floor((diff1 / days) - diff1Years * 365)
                var diff1Hours = Math.floor((diff1 - (diff1Years * 365 + diff1Days) * days) / hours)
                var diff1Minutes = Math.floor((diff1 - (diff1Years * 365 + diff1Days) * days - diff1Hours * hours) / minutes)
                var diff1Seconds = Math.floor((diff1 - (diff1Years * 365 + diff1Days) * days - diff1Hours * hours -
                    diff1Minutes * minutes) / seconds)
                var diff = t2 - t0
                var diffYears = Math.floor(diff / years)
                var diffDays = Math.floor((diff / days) - diffYears * 365)
                var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
                var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
                var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
                    diffMinutes * minutes) / seconds)
                document.getElementById("lovexhjSitetime").innerHTML = "胡胡和小姜相识 " + diff1Years + " 年 " + diff1Days + " 天 " +
                    diff1Hours + " 小时 " + diff1Minutes + " 分钟 " + diff1Seconds + " 秒啦"  + "<br />"+ "<br />" + "胡胡和小姜相见 " + diffYears + " 年 " + diffDays + " 天 " +
                    diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒啦"
            }
            lovexhjSitetime()