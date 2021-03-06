"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default("app:mongoose-service");
class MongooseService {
    constructor() {
        this.count = 0;
        this.mongooseOptions = {
            userNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            useFindAndModify: false,
        };
        this.connectWithRetry = () => {
            log("Attempting MongoDB connection (will retry if needed)");
            mongoose_1.default
                .connect("mongodb://localhost:27017/api-db", this.mongooseOptions)
                .then(() => {
                log("MongoDB is connected");
            })
                .catch((err) => {
                const retrySeconds = 5;
                log(`MongoDB connection unsuccessful (will retry #${++this
                    .count} after ${retrySeconds} seconds):`, err);
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZXMvbW9uZ29vc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFnQztBQUNoQyxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sZUFBZTtJQVNuQjtRQVJRLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixvQkFBZSxHQUFHO1lBQ3hCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsa0JBQWtCLEVBQUUsSUFBSTtZQUN4Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLGdCQUFnQixFQUFFLEtBQUs7U0FDeEIsQ0FBQztRQVVGLHFCQUFnQixHQUFHLEdBQUcsRUFBRTtZQUN0QixHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztZQUM1RCxrQkFBUTtpQkFDTCxPQUFPLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDakUsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDVCxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2IsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixHQUFHLENBQ0QsZ0RBQWdELEVBQUUsSUFBSTtxQkFDbkQsS0FBSyxVQUFVLFlBQVksWUFBWSxFQUMxQyxHQUFHLENBQ0osQ0FBQztnQkFDRixVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQXZCQSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sa0JBQVEsQ0FBQztJQUNsQixDQUFDO0NBbUJGO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9